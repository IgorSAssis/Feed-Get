import { Router, Request, Response } from "express";
import { NodemailerMailAdapter } from "./adapters/nodemailer/nodemailer-mail-adapter";
import { PrismaFeedbacksRepository } from "./repositories/prisma/prisma-feedbacks-repository";
import { IndexFeedbackUseCase } from "./use-cases/index-feedback-use-case";
import { SubmitFeedbackUseCase } from "./use-cases/submit-feedback-use-case";

export const routes = Router();

routes.post("/feedbacks", async (req: Request, res: Response) => {

    const { type, comment, screenshot } = req.body;

    const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
    const nodemailerMailAdapter = new NodemailerMailAdapter();
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
        prismaFeedbacksRepository,
        nodemailerMailAdapter
    );

    await submitFeedbackUseCase.execute({ type, comment, screenshot });

    return res.status(201).send();

});

routes.get("/feedbacks", async (req: Request, res: Response) => {

    const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
    const indexFeedbackUseCase = new IndexFeedbackUseCase(prismaFeedbacksRepository);

    const feedbacks = await indexFeedbackUseCase.execute();

    return res.status(200).send({ feedbacks });
});