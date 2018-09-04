import { IJob } from '../domain/ijob';

export interface IUser {
  login: string;
  password: string;
  nom: string;
  prenom: string;
  email: string;
  cv: string;
  actif: boolean;
  candidatures: IJob[];
  nomEntreprise: string;
  adresseEntreprise: string;
  numTel: string;
  siteWeb: string;
}
