import patientsData from "../../data/patients";
import { Patient, PatientWithoutSsn } from "../../types";

const patients:Patient[] = patientsData;

const getPatients = ():PatientWithoutSsn[] => {
  const patientsWithoutSsn = patients.map(({id, name, dateOfBirth, gender, occupation})=> ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation
  }));

  return patientsWithoutSsn;
};

export { getPatients };