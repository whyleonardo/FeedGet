import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapater';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedback-repository';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';
import { prisma } from './prisma'
import  nodemailer  from 'nodemailer';
import express from 'express'

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "adaca088bf35ea",
    pass: "aff0a361bbe030"
  }
});

export const routes = express.Router()

routes.post('/feedbacks', async (req, res) => {

  const { type, comment, screenshot } = req.body

  const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
  const nodemailerMailAdapter = new NodemailerMailAdapter()
  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
      prismaFeedbacksRepository,
      nodemailerMailAdapter
  )
  await submitFeedbackUseCase.execute({
        type,
        comment,
        screenshot,
  })
   return res.status(201).send()
  })

  