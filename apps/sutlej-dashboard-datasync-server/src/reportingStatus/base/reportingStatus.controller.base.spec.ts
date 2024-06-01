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
import { ReportingStatusController } from "../reportingStatus.controller";
import { ReportingStatusService } from "../reportingStatus.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  approvedAt: new Date(),
  createdAt: new Date(),
  date: new Date(),
  deptNo: "exampleDeptNo",
  doneBy: "exampleDoneBy",
  id: "exampleId",
  investigationId: "exampleInvestigationId",
  isRepeat: "true",
  labNo: "exampleLabNo",
  patientId: "examplePatientId",
  patientInAt: new Date(),
  patientOutAt: new Date(),
  repeatInAt: new Date(),
  repeatOutAt: new Date(),
  status: "exampleStatus",
  testId: "exampleTestId",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  approvedAt: new Date(),
  createdAt: new Date(),
  date: new Date(),
  deptNo: "exampleDeptNo",
  doneBy: "exampleDoneBy",
  id: "exampleId",
  investigationId: "exampleInvestigationId",
  isRepeat: "true",
  labNo: "exampleLabNo",
  patientId: "examplePatientId",
  patientInAt: new Date(),
  patientOutAt: new Date(),
  repeatInAt: new Date(),
  repeatOutAt: new Date(),
  status: "exampleStatus",
  testId: "exampleTestId",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    approvedAt: new Date(),
    createdAt: new Date(),
    date: new Date(),
    deptNo: "exampleDeptNo",
    doneBy: "exampleDoneBy",
    id: "exampleId",
    investigationId: "exampleInvestigationId",
    isRepeat: "true",
    labNo: "exampleLabNo",
    patientId: "examplePatientId",
    patientInAt: new Date(),
    patientOutAt: new Date(),
    repeatInAt: new Date(),
    repeatOutAt: new Date(),
    status: "exampleStatus",
    testId: "exampleTestId",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  approvedAt: new Date(),
  createdAt: new Date(),
  date: new Date(),
  deptNo: "exampleDeptNo",
  doneBy: "exampleDoneBy",
  id: "exampleId",
  investigationId: "exampleInvestigationId",
  isRepeat: "true",
  labNo: "exampleLabNo",
  patientId: "examplePatientId",
  patientInAt: new Date(),
  patientOutAt: new Date(),
  repeatInAt: new Date(),
  repeatOutAt: new Date(),
  status: "exampleStatus",
  testId: "exampleTestId",
  updatedAt: new Date(),
};

const service = {
  createReportingStatus() {
    return CREATE_RESULT;
  },
  reportingStatuses: () => FIND_MANY_RESULT,
  reportingStatus: ({ where }: { where: { id: string } }) => {
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

describe("ReportingStatus", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ReportingStatusService,
          useValue: service,
        },
      ],
      controllers: [ReportingStatusController],
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

  test("POST /reportingStatuses", async () => {
    await request(app.getHttpServer())
      .post("/reportingStatuses")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        approvedAt: CREATE_RESULT.approvedAt.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        date: CREATE_RESULT.date.toISOString(),
        patientInAt: CREATE_RESULT.patientInAt.toISOString(),
        patientOutAt: CREATE_RESULT.patientOutAt.toISOString(),
        repeatInAt: CREATE_RESULT.repeatInAt.toISOString(),
        repeatOutAt: CREATE_RESULT.repeatOutAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /reportingStatuses", async () => {
    await request(app.getHttpServer())
      .get("/reportingStatuses")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          approvedAt: FIND_MANY_RESULT[0].approvedAt.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          date: FIND_MANY_RESULT[0].date.toISOString(),
          patientInAt: FIND_MANY_RESULT[0].patientInAt.toISOString(),
          patientOutAt: FIND_MANY_RESULT[0].patientOutAt.toISOString(),
          repeatInAt: FIND_MANY_RESULT[0].repeatInAt.toISOString(),
          repeatOutAt: FIND_MANY_RESULT[0].repeatOutAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /reportingStatuses/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/reportingStatuses"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /reportingStatuses/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/reportingStatuses"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        approvedAt: FIND_ONE_RESULT.approvedAt.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        date: FIND_ONE_RESULT.date.toISOString(),
        patientInAt: FIND_ONE_RESULT.patientInAt.toISOString(),
        patientOutAt: FIND_ONE_RESULT.patientOutAt.toISOString(),
        repeatInAt: FIND_ONE_RESULT.repeatInAt.toISOString(),
        repeatOutAt: FIND_ONE_RESULT.repeatOutAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /reportingStatuses existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/reportingStatuses")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        approvedAt: CREATE_RESULT.approvedAt.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        date: CREATE_RESULT.date.toISOString(),
        patientInAt: CREATE_RESULT.patientInAt.toISOString(),
        patientOutAt: CREATE_RESULT.patientOutAt.toISOString(),
        repeatInAt: CREATE_RESULT.repeatInAt.toISOString(),
        repeatOutAt: CREATE_RESULT.repeatOutAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/reportingStatuses")
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
