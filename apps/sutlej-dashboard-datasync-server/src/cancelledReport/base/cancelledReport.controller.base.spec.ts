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
import { CancelledReportController } from "../cancelledReport.controller";
import { CancelledReportService } from "../cancelledReport.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  cancelDate: new Date(),
  cancelledBy: "exampleCancelledBy",
  cancelReason: "exampleCancelReason",
  createdAt: new Date(),
  discount: 42.42,
  generatedBy: "exampleGeneratedBy",
  id: "exampleId",
  investigation: "exampleInvestigation",
  labNo: "exampleLabNo",
  net: 42.42,
  paidAmount: 42.42,
  patientAge: 42,
  patientName: "examplePatientName",
  paymentMode: "examplePaymentMode",
  referredBy: "exampleReferredBy",
  total: 42.42,
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  cancelDate: new Date(),
  cancelledBy: "exampleCancelledBy",
  cancelReason: "exampleCancelReason",
  createdAt: new Date(),
  discount: 42.42,
  generatedBy: "exampleGeneratedBy",
  id: "exampleId",
  investigation: "exampleInvestigation",
  labNo: "exampleLabNo",
  net: 42.42,
  paidAmount: 42.42,
  patientAge: 42,
  patientName: "examplePatientName",
  paymentMode: "examplePaymentMode",
  referredBy: "exampleReferredBy",
  total: 42.42,
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    cancelDate: new Date(),
    cancelledBy: "exampleCancelledBy",
    cancelReason: "exampleCancelReason",
    createdAt: new Date(),
    discount: 42.42,
    generatedBy: "exampleGeneratedBy",
    id: "exampleId",
    investigation: "exampleInvestigation",
    labNo: "exampleLabNo",
    net: 42.42,
    paidAmount: 42.42,
    patientAge: 42,
    patientName: "examplePatientName",
    paymentMode: "examplePaymentMode",
    referredBy: "exampleReferredBy",
    total: 42.42,
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  cancelDate: new Date(),
  cancelledBy: "exampleCancelledBy",
  cancelReason: "exampleCancelReason",
  createdAt: new Date(),
  discount: 42.42,
  generatedBy: "exampleGeneratedBy",
  id: "exampleId",
  investigation: "exampleInvestigation",
  labNo: "exampleLabNo",
  net: 42.42,
  paidAmount: 42.42,
  patientAge: 42,
  patientName: "examplePatientName",
  paymentMode: "examplePaymentMode",
  referredBy: "exampleReferredBy",
  total: 42.42,
  updatedAt: new Date(),
};

const service = {
  createCancelledReport() {
    return CREATE_RESULT;
  },
  cancelledReports: () => FIND_MANY_RESULT,
  cancelledReport: ({ where }: { where: { id: string } }) => {
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

describe("CancelledReport", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: CancelledReportService,
          useValue: service,
        },
      ],
      controllers: [CancelledReportController],
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

  test("POST /cancelledReports", async () => {
    await request(app.getHttpServer())
      .post("/cancelledReports")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        cancelDate: CREATE_RESULT.cancelDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /cancelledReports", async () => {
    await request(app.getHttpServer())
      .get("/cancelledReports")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          cancelDate: FIND_MANY_RESULT[0].cancelDate.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /cancelledReports/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/cancelledReports"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /cancelledReports/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/cancelledReports"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        cancelDate: FIND_ONE_RESULT.cancelDate.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /cancelledReports existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/cancelledReports")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        cancelDate: CREATE_RESULT.cancelDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/cancelledReports")
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
