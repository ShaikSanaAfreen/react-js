import React from 'react';
export class AddEmployee extends React.Component {
    emptyEmp = {
        eId:'',
        eName:'',
        eSalary:''
    };
    constructor(props) 
        {
            super(props);
            
                this.state = {
                    empData: this.emptyEmp
                };
                this.handleChange = this.handleChange.bind(this);
                this.handleSubmit = this.handleSubmit.bind(this);
            
        }
        handleChange(event) {
            const target = event.target;
            const value = target.value;
            const name = target.name;
            let emp = { ...this.state.empData };
            emp[name] = value;
            this.setState({ empData: emp });
        }
        async handleSubmit(event)
        {
            event.preventDefault();
            const emp = this.state.empData;
            console.log("emp:" + JSON.stringify(emp));
            await fetch('http://localhost:8075/api/employee' ,{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(emp),
            });
            this.props.history.push('/list-emp');


        }
        render()
        {
            return (
                <div className="body">
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-3"></div>
                            <div className="col-5">

                                <div className="card card-align">
                                    <div classn="card-header bg-info">
                                        <h4>Add Employee</h4>
                                    </div>
                                    <div className="card-body">
                                        <form onSubmit={this.handleSubmit}>


                                        
                                        <div className="form-group mt-3">
                                            <label >Employee Name :</label>
                                            <input type="text" onChange={this.handleChange} id="empName" name="eName" />
                                        </div>
                                        <div className="form-group">
                                            <label >Salary :</label>
                                            <input type="text" onChange={this.handleChange} id="empSalary"
                                                name="eSalary" />
                                        </div>
                                        <button type="submit" className="btn btn-info" >Save</button>
                                    
                                    </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

