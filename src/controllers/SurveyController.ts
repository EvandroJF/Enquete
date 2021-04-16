import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SurveysRespository } from "../repositories/SurveysRespository"; 

class SurveyController {
  async create(request: Request,response: Response){
    const {title, description } = request.body;

    const surveyRespository = getCustomRepository(SurveysRespository);

    const survey = surveyRespository.create({
        title,
        description
    });

    await surveyRespository.save(survey);

    return response.status(201).json(survey);
  }
  async show(request: Request, response: Response){
    const surveyRespository = getCustomRepository(SurveysRespository);

    const all = await surveyRespository.find();

    return response.json(all);
  }
}

export { SurveyController }