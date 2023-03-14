import React, { Component } from 'react'

export default class StudentDetails extends Component {
  render() {
    // console.log(this.props);
    var data = this.props.data ;
    return (
      <table border="1px">
        <tr>
            <td>Photo</td>
            <th>Name</th>
            <th>Class Sec</th>
            <th>Email </th>
            <th>Address</th>
            <th>Father's Name</th>
            <th>Father's Contact Details</th>
            <th>Mother's Name</th>
            <th>Mothers's Contact Details</th>
            <th>Extra Curricular Activities</th>
        </tr>
        {data.map((x)=>{
            return <tr>
                <td>
                  <img src={x.stdImg} alt="" srcset="" width="200px"/>
                </td>
                <td>{x.stdName}</td>
                <td>{`${x.stdClass} std `}
                <br />
                {`${x.stdSec} sec`}</td>
                <td>{x.stdEmailId}</td>
                <td>{x.stdAddress}</td>
                <td>
                    {x.stdParentDetails.fatherName}  
                </td>
                <td>
                <b>Personal :</b> {x.stdParentDetails.fatherPhNo} 
                <br />
                <b>Work :</b> {x.stdParentDetails.fatherWorkNo} 
                </td>
                <td>
                    {x.stdParentDetails.motherName}       
                </td>
                <td>
                  <b>Personal :</b> {x.stdParentDetails.motherPhNo} 
                  <br />
                  {
                      (x.stdParentDetails.motherWorkNo!=="")?
                        <>
                          <b>Work :</b>{x.stdParentDetails.motherWorkNo }
                        </>
                      :null
                  }
                 
                </td>
                <td>
                    <ul>
                    {
                        x.stdActivities.map((x)=>{
                           return <li>{x}</li> 
                        })
                    }
                    </ul>
                </td>
            </tr>
        })}
      </table>
    )
  }
}
