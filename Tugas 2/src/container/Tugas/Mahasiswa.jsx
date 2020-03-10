import React from 'react';
import './Mahasiswa.css';


export default class Mahasiswa extends React.Component {

    state = {
        listMahasiswa: [],
        insertData: {
            nim: "",
            nama: "",
            alamat: "",
            hp: "",
            angkatan: "",
            status: ""
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        fetch('http://localhost:3001/mahasiswa?_sort=angkatan&_order=asc', { method: 'GET' })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    listMahasiswa: data
                })
            })
    }

    deleteData(data) {
        fetch('http://localhost:3001/mahasiswa/' + data, { method: 'DELETE' })
            .then(res => {
                this.getData()
            })
    }

    addData = (event) => {
        let formInsert = { ...this.state.insertData };
        let idData = this.state.insertData.nim;
        formInsert['id'] = idData;
        formInsert[event.target.name] = event.target.value;
        this.setState({
            insertData: formInsert
        })
    }

    saveData = () => {
        fetch('http://localhost:3001/mahasiswa/', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertData)
        })
            .then((response) => {
                this.getData();
            })
    }

    render() {
        return (
            <div className="mahasiswa">
                <div className="container">
                    <div className="row">
                        <div className="col-md text-center py-3">
                            <h2>Input Data Mahasiswa</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <div class="form-group row">
                                <label for="inputEmail3" class="col-sm-2 col-form-label">NIM</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="nim" name="nim" onChange={this.addData} placeholder="Nomor Induk Mahasiswa" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="inputEmail3" class="col-sm-2 col-form-label">Nama</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="nama" name="nama" onChange={this.addData} placeholder="Nama" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="inputEmail3" class="col-sm-2 col-form-label">Alamat</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="alamat" name="alamat" onChange={this.addData} placeholder="JL Bla bla bla" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="inputEmail3" class="col-sm-2 col-form-label">Nomor</label>
                                <div class="col-sm-10">
                                    <input type="email" class="form-control" id="hp" name="hp" onChange={this.addData} placeholder="6281xxxx" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="inputEmail3" class="col-sm-2 col-form-label">Angkatan</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="angkatan" name="angkatan" onChange={this.addData} placeholder="2017/2018/2019/dst" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="inputEmail3" class="col-sm-2 col-form-label">Nomor</label>
                                <div class="col-sm-10">
                                    <select class="custom-select" id="status" name="status" onChange={this.addData}>
                                        <option selected>Status Mahasiswa</option>
                                        <option value="aktif">Aktif</option>
                                        <option value="cuti">Cuti</option>
                                        <option value="lulus">Lulus</option>
                                    </select>
                                </div>
                            </div>
                            {/* <div className="row">
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text width-100px" id="inputGroup-sizing-default">NIM</span>
                                    </div>
                                    <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" id="nim" name="nim" onChange={this.addData} />
                                </div>
                            </div>
                            <div className="row">
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text width-100px" id="inputGroup-sizing-default">Nama</span>
                                    </div>
                                    <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" id="nama" name="nama" onChange={this.addData} />
                                </div>
                            </div>
                            <div className="row">
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text width-100px" id="inputGroup-sizing-default">Alamat</span>
                                    </div>
                                    <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" id="alamat" name="alamat" onChange={this.addData} />
                                </div>
                            </div>
                            <div className="row">
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text width-100px" id="inputGroup-sizing-default">Nomor</span>
                                    </div>
                                    <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" id="hp" name="hp" onChange={this.addData} />
                                </div>
                            </div>
                            <div className="row">
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text width-100px" id="inputGroup-sizing-default">Angkatan</span>
                                    </div>
                                    <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" id="angkatan" name="angkatan" onChange={this.addData} />
                                </div>
                            </div>
                            <div className="row">
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <label class="input-group-text width-100px" for="inputGroupSelect01">Status</label>
                                    </div>
                                    <select class="custom-select" id="status" name="status" onChange={this.addData}>
                                        <option selected>Status Mahasiswa</option>
                                        <option value="aktif">Aktif</option>
                                        <option value="cuti">Cuti</option>
                                        <option value="lulus">Lulus</option>
                                    </select>
                                </div>
                            </div> */}
                            <button className="btn btn-block btn-primary" onClick={this.saveData}>Simpan</button>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">NIM</th>
                                        <th scope="col">Nama</th>
                                        <th scope="col">Alamat</th>
                                        <th scope="col">Nomor</th>
                                        <th scope="col">Angkatan</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.listMahasiswa.map(mhs => {
                                            return (
                                                <tr>
                                                    <td>{mhs.nim}</td>
                                                    <td>{mhs.nama}</td>
                                                    <td>{mhs.alamat}</td>
                                                    <td>{mhs.hp}</td>
                                                    <td>{mhs.angkatan}</td>
                                                    <td>{mhs.status}</td>
                                                    <td>
                                                        <button className="btn btn-danger" onClick={() => this.deleteData(mhs.id)} >Hapus</button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}