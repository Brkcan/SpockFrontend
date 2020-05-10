import React from 'react';
import axios from 'axios';

/*  <form onSubmit={this.onSubmit}>
    <input
      type="text"
      className="form-control- form-control-lg"
      name="depotcode"
      value={this.state.depotcode}
      onChange={this.onChange} />
  <input type="submit" value="Gönder" />
  </form>*/
class Context extends React.Component{
  constructor(){
    super();
    this.state = {
      liste:[],
      depotcode: '',
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,

    });
   }
   onSubmit(e) {
     e.preventDefault();
     this.setState({
       default: 2
     })
    // axios.get('http://localhost:8080/api/getbarcode/'+this.state.depotcode)
    //.then(users => users.data)
    // .then(liste => {
    //   this.setState({
    //     liste,
    //   });
    // });
       //console.log(this.state.start_date_);
       console.log(this.state.depotcode);
   }

  componentDidMount(){
    const username = this.props.match.params.username;
    console.log(username);
    axios.get('http://localhost:8080/api/getbarcode/'+username)
    .then(users => users.data)
    .then(liste => {
      this.setState({
        liste,
      });
    });

  }
  render() {
    return (
      <div>

      <div className="">

            <div class="card card-success">
              <div class="card-header">
                <h3 class="card-title">Barcode</h3>
              </div>
              <div class="card-body">
                <input class="form-control form-control-lg" type="text" placeholder="Barcode"/>
                <br/>
              </div>

            </div>

        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>DataTables</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="fake_url">Home</a></li>
                  <li className="breadcrumb-item active">DataTables</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="content">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title"></h3>
                </div>

                <div className="card-body">
                  <table id="example2" className="table table-bordered table-hover">
                    <thead>
                    <tr>
                      <th>Barkod</th>
                      <th>Kargo Numarası</th>
                      <th>Depo kodu</th>
                      <th>Depo</th>
                      <th>Tam Ismi</th>
                    </tr>
                    </thead>
                    {
                      this.state.liste.map(user => {
                        return (
                          <tbody>
                          <tr>
                            <td>{ user.barcode }</td>
                            <td>{ user.cargoNumber }</td>
                            <td>{ user.depotcode }</td>
                            <td>{ user.Store }</td>
                            <td>{ user.fullName }</td>
                          </tr>
                          </tbody>
                        )
                      })

                    }

                    <tfoot>
                    <tr>
                      <th>Barkod</th>
                      <th>Kargo Numarası</th>
                      <th>Depo kodu</th>
                      <th>Depo</th>
                      <th>Tam İsmi</th>
                    </tr>
                    </tfoot>
                  </table>
                </div>

              </div>



            </div>
          </div>
        </section>

      </div>
      </div>
    );
  }
}

export default Context;
