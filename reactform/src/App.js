import './App.css';
import { useState, useRef } from 'react'

function App() {
  const baseData = {
    name: "",
    email: "",
    noHandphone: "",
    pendidikan: "",
    kelas: "",
    harapan: ""
  }

  const baseError = {
    nama: "",
    email: "",
    noHandphone: ""
  }

  const suratKesungguhan = useRef(null)
  const [data, setData] = useState(baseData)
  const [errorMessage, setErrorMessage] = useState(baseError)
  const nameRegex = /^[A-Za-z]+$/
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  const noHandphoneRegex = /^[0-9]*$/

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    if (name === "name"){
      if (nameRegex.test(value)) {
        setErrorMessage({...errorMessage, nama: ""})
      } else {
        setErrorMessage({...errorMessage, nama: "Nama Lengkap Harus Berupa Huruf"})
      }
    }

    if (name === "email"){
      if(emailRegex.test(value)) {
        setErrorMessage({...errorMessage, email: ""})
      } else {
        setErrorMessage({...errorMessage, email: "Email Tidak Sesuai"})
      }
    }

    if (name === "noHandphone"){
      if (noHandphoneRegex.test(value)) {
        setErrorMessage({...errorMessage, noHandphone: ""})
      } else {
        setErrorMessage({...errorMessage, noHandphone: "No Handphone Tidak Sesuai"})
      }
    }

    setData({
      ...data,
      [name]: value
    })


    console.log(data)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (errorMessage.email === "" && errorMessage.nama === "" && errorMessage.noHandphone === "") {
      alert(`Data Pendaftar "${data.name}" Berhasil Diterima`)
    } else {
      alert("Data Pendaftar Tidak Sesuai")
    }
  }

  const resetButton = () => {
    setData(baseData)
    setErrorMessage({...errorMessage, name: "", email: "", noHandphone: ""})
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Pendaftaran Peserta Coding Bootcamp</h1>

        <form className='form' onSubmit={handleSubmit}>
          <label>Nama Lengkap:</label> <br />
          <input className='input' style={{width: '570px'}} type="text" name='name' value={data.name} onChange={handleChange} required/> <br />
          
          <label>Email:</label> <br />
          <input className='input' style={{width: '570px'}} type="email" name='email' value={data.email} onChange={handleChange} required /> <br />

          <label>No Handphone:</label> <br />
          <input className='input' style={{width: '570px'}} type="text" name='noHandphone' value={data.noHandphone} onChange={handleChange} required/> <br />

          <label>Latar Belakang Pendidikan:</label> <br />
          <input type="radio" name='pendidikan' value='IT' onChange={handleChange} /> <label>IT</label>
          <input className='input' type="radio" name='pendidikan' value='Non-IT' onChange={handleChange} /> <label>Non IT</label> <br />

          <label>Kelas Coding yang Dipilih:</label> <br />
          <select style={{width: '570px', marginBottom: "10px"}} name="kelas" value={data.kelas} onChange={handleChange} required >
            <option>Pilih Salah Satu Program</option>
            <option value="backend">Coding Backend with Golang</option>
            <option value="frontend">Coding Frontend with ReactJS</option>
            <option value="fullstack">Fullstack Developer</option>
          </select> <br />

          <label>Foto Surat Kesungguhan</label> <br />
          <input className='input' type="file" name='foto' ref={suratKesungguhan} required/> <br />

          <label>Harapan Untuk Coding Bootcamp ini:</label> <br />
          <textarea className='input' style={{width: '570px'}} name="harapan" value={data.harapan} onChange={handleChange} /> <br />

          <span style={{color: "red"}}>{errorMessage.nama}</span> <br />
          <span style={{color: "red"}}>{errorMessage.email}</span> <br />
          <span style={{color: "red"}}>{errorMessage.noHandphone}</span> <br />

          <button style={{backgroundColor: "green"}} type='submit'>Submit</button>
          <button style={{marginLeft: "40px", backgroundColor: "red"}} type='reset' onClick={resetButton}>Reset</button>
        </form>
      </div>
    </div>
  );
}

export default App;
