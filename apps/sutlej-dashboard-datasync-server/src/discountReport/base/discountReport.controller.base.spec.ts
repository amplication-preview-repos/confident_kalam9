import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { DiscountReportController } from "../discountReport.controller";
import { DiscountReportService } from "../discountReport.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  approvedBy: "exampleApprovedBy",
  createdAt: new Date(),
  discount: 42.42,
  discountDate: new Date(),
  discountReason: "exampleDiscountReason",
  id: "exampleId",
  labNo: "exampleLabNo",
  panelName: "examplePanelName",
  patientName: "examplePatientName",
  total: 42.42,
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  approvedBy: "exampleApprovedBy",
  createdAt: new Date(),
  discount: 42.42,
  discountDate: new Date(),
  discountReason: "exampleDiscountReason",
  id: "exampleId",
  labNo: "exampleLabNo",
  panelName: "examplePanelName",
  patientName: "examplePatientName",
  total: 42.42,
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    approvedBy: "exampleApprovedBy",
    createdAt: new Date(),
    discount: 42.42,
    discountDate: new Date(),
    discountReason: "exampleDiscountReason",
    id: "exampleId",
    labNo: "exampleLabNo",
    panelName: "examplePanelName",
    patientName: "examplePatientName",
    total: 42.42,
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  approvedBy: "exampleApprovedBy",
  createdAt: new Date(),
  discount: 42.42,
  discountDate: new Date(),
  discountReason: "exampleDiscountReason",
  id: "exampleId",
  labNo: "exampleLabNo",
  panelName: "examplePanelName",
  patientName: "examplePatientName",
  total: 42.42,
  updatedAt: new Date(),
};

const service = {
  createDiscountReport() {
    return CREATE_RESULT;
  },
  discountReports: () => FIND_MANY_RESULT,
  discountReport: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("DiscountReport", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: DiscountReportService,
          useValue: service,
        },
      ],
      controllers: [DiscountReportController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /discountReports", async () => {
    await request(app.getHttpServer())
      .post("/discountReports")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        discountDate: CREATE_RESULT.discountDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /discountReports", async () => {
    await request(app.getHttpServer())
      .get("/discountReports")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          discountDate: FIND_MANY_RESULT[0].discountDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /discountReports/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/discountReports"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /discountReports/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/discountReports"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        discountDate: FIND_ONE_RESULT.discountDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /discountReports existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/discountReports")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        discountDate: CREATE_RESULT.discountDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/discountReports")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
