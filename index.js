// variable email penerima
let emailReceiver = 'bintoro1106@gmail.com'

// function untuk mengambil data dari ID di html
function submitForm(event) {
    let name = document.getElementById("input-name").value
    let email = document.getElementById("input-email").value
    let phonenumber = document.getElementById("input-phonenumber").value
    let subject = document.getElementById("select-subject").value
    let message = document.getElementById("input-message").value

// untuk memunculkan pesan jika data belum diisi
    if(name == '') {
        alert('Nama kamu harus diisi')
    }
    if(email == ''){
        alert('Email kamu harus diisi')
    }
    if(phonenumber == ''){
        alert('Nomor handphone kamu harus diisi')
    }
    if(subject == ''){
        alert('Subject kamu harus diisi')
    }
    if(message == ''){
        alert('Pesan kamu harus diisi')
    }

// untuk mengecek data di console log
    console.log(name)
    console.log(email)
    console.log(phonenumber)
    console.log(subject)
    console.log(message)

// untuk membuat email berdasarkan data yang telah diambil dari input
    let a = document.createElement('a')
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello my name ${name}, ${message}`
    a.click()
}
