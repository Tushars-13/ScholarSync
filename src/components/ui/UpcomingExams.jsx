import { upcomingExams } from "../../data/academicsData";

function UpcomingExams() {
  return (
    <div className="upcoming-exams">

      <table className="upcoming-exams-table">

        <thead>
          <tr>
            <th>Date</th>
            <th>Subject</th>
            <th>Time</th>
          </tr>
        </thead>

        <tbody>

          {upcomingExams.map((exam, index) => (

            <tr key={index}>

              <td>{exam.date}</td>

              <td>{exam.subject}</td>

              <td>{exam.time}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default UpcomingExams;