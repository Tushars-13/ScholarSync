import { assessmentData } from "../../data/academicsData";

function AssessmentTable() {
  return (
    <div className="assessment-table-container">

      <table className="assessment-table">

        <thead>
          <tr>
            <th>Subject</th>
            <th>UT-1</th>
            <th>UT-2</th>
            <th>Mid-1</th>
            <th>Mid-2</th>
            <th>PUT</th>
            <th>Surprise</th>
          </tr>
        </thead>

        <tbody>

          {assessmentData.map((subject, index) => (

            <tr key={index}>

              <td>{subject.subject}</td>

              <td>{subject.ut1}</td>

              <td>{subject.ut2}</td>

              <td>{subject.mid1}</td>

              <td>{subject.mid2}</td>

              <td>{subject.put}</td>

              <td>{subject.surprise}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default AssessmentTable;