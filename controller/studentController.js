import { students } from "../data/student.js"

export const getStu = (req,res) =>{
    res.json(students)
}
export const singleStudent = (req,res) =>{
    const {roll} = req.params
    const single = students.find((data) => data.roll == roll)
    res.json(single)

}