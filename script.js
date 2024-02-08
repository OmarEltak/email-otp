function sendOTP(){
    const email = document.getElementById('email');
    const otpverify = document.getElementsByClassName('otpverify')[0];

 let otp_val = Math.floor(Math.random() * 10000);
 let emailBody = `<h2>Your OPT verifecation code is </h2>${otp_val}`; 

    Email.send({
        SecureToken : "e42c9920-cbd8-4b74-a007-6af42ce82d04",
        To : email.value,
        From : "omareltak7@gmail.com",
        Subject : "Your OTP verification number",
        Body : emailBody,
    }).then(
      message => {
        if (message === "OK"){
            alert("OTP sent to your mail" + email.value);

            otpverify.style.display = "flex";
            const otp_inp = document.getElementById('otp_inp');
            const otp_btn = document.getElementById('otp-btn');

            otp_btn.addEventListener('click', () => {
                if (otp_inp.value == otp_val) {
                    alert ("Email verified succesfully...")

                }
                    else {
                        alert ("Invalid OTP")
                    }
            })
        }
      }
    );
}