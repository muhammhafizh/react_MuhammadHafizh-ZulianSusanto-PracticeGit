/* eslint-disable jsx-a11y/alt-text */
import altaImage from './img/logo-ALTA-v2@2x.png'

function Contact() {
  return (
    <div className="container-fluid">
        <div className="row d-md-flex align-items-center ">
            <div className="col-md-4 form-img">
                <div className="kotak w-100 text-center">
                    <img className="alta" src={altaImage} />
                </div>
            </div>
            <div className="col-12 col-md-8 isi-form">
                <h3>Contact Us</h3>
                <form>
                <div className="form-group rincian-form">
                    <label for="nama" className="required">Full Name</label>
                    <input type="fullname" className="form-control" id="namalengkap" placeholder="Your Full Name Here..." />
                </div>
                <div className="form-group rincian-form">
                    <label for="alamatemail" className="required">Email Address</label>
                    <input type="email" className="form-control" id="emailbaru" aria-describedby="emailHelp" placeholder="example@domail.com" />
                </div>
                <div className="form-group rincian-form">
                    <label for="telepon" className="required">Phone Number</label>
                    <input type="text" className="form-control" id="phonenumber" aria-describedby="nomorbaru" placeholder="08573890xxxxx" />
                </div>
                <div className="form-group rincian-form">
                <label for="kewarganegaraan">Nationality</label>
                <select className="form-control">
                    <option>Selected</option>
                </select>
                <div className="form-group">
                        <label for="message">Message:</label>
                        <textarea className="form-control" rows="5" id="message"></textarea>
                      </div> 
                </div>
                    <input type="submit" className="tombol" value="Submit" />
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact