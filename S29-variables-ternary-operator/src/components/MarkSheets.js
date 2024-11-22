import React from 'react'

function MarkSheets(props) {
    let telMarks=Number(props.telMarks)
    let hinMarks=Number(props.hinMarks)
    let engMarks =Number(props.engMarks)
    let sciMarks=Number(props.sciMarks)
    let phyMarks =Number(props.phyMarks)
    let socMarks=Number(props.socMarks)
    let matMarks=Number(props.matMarks)
    let totalMarks=Number(props.totalMarks)
    let total= telMarks+hinMarks+engMarks+sciMarks+phyMarks+socMarks+matMarks;
    let percentage=(total/700)*100

  return (
    <div>
      <table>
        <caption>{props.Name}</caption>
        <thead class="th">
            <tr>
                <th>Subjects</th>
                <th>Total Marks</th>
                <th>Marks Obtained</th>
                <th>Result</th>
                <th>Remarks</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Telugu</td>
                <td>100</td>
                <td>{telMarks}</td>
                <td>{telMarks >=35? "Pass" : "Fail"}</td>
                <td>{telMarks >=35? "Good" : "Bad Performance"}</td>
            </tr>
            <tr>
                <td>Hindi</td>
                <td>100</td>
                <td>{hinMarks}</td>
                <td>{hinMarks >=35? "Pass" : "Fail"}</td>
                <td>{hinMarks >=35? "Good" : "Bad Performance"}</td>
            </tr>
            <tr>
                <td>English</td>
                <td>100</td>
                <td>{engMarks}</td>
                <td>{engMarks >=35? "Pass" : "Fail"}</td>
                <td>{engMarks >=35? "Good" : "Bad Performance"}</td>
            </tr>
            <tr>
                <td>Science</td>
                <td>100</td>
                <td>{sciMarks}</td>
                <td>{sciMarks >=35? "Pass" : "Fail"}</td>
                <td>{sciMarks >=35? "Good" : "Bad Performance"}</td>
            </tr>
            <tr>
                <td>Physics</td>
                <td>100</td>
                <td>{phyMarks}</td>
                <td>{phyMarks >=35? "Pass" : "Fail"}</td>
                <td>{phyMarks>=35? "Good" : "Bad Performance"}</td>
            </tr>
            <tr>
                <td>Social</td>
                <td>100</td>
                <td>{socMarks}</td>
                <td>{socMarks >=35? "Pass" : "Fail"}</td>
                <td>{socMarks >=35? "Good" : "Bad Performance"}</td>
            </tr>
            <tr>
                <td>Maths</td>
                <td>100</td>
                <td>{matMarks}</td>
                <td>{matMarks >35? "Pass" : "Fail"}</td>
                <td>{matMarks >=35? "Good" : "Bad Performance"}</td>
            </tr>

        </tbody>
        <tfoot class="tf">
            <tr>
                <th>Total</th>
                <th>700</th>
                <th>{total}({percentage.toFixed(4)}%)</th>
                <th>A</th>
                <th>Very Good</th>
            </tr>

        </tfoot>
        
      </table>
    </div>
  )
}

export default MarkSheets
