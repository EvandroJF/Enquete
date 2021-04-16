import { Survey } from "../models/Survey";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Survey)
class SurveysRespository extends Repository<Survey>{

}
export { SurveysRespository }