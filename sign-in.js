console.log("sign in nè");

const users = JSON.parse(localStorage.getItem("users")) || [];

document.getElementById("sign-in-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // tạo ra đối tượng user
  const user = {
    email,
    password,
  };

  // tìm ra user cần đăng nhập vào hệ thống từ email. Ex: *.find()
  const userDB = users.find((_user) => {
    return _user.email === user.email;
  });

  if (userDB?.password === user.password) {
    console.log("dang nhap thanh cong");
    // tạo 1 cái key vào localStorage có tên là emailLogged => email
    localStorage.setItem("emailLogged", JSON.stringify(userDB.email));
    window.location.href = "index.html";
  } else {
    console.log("Tai khoan hoac mat khau cua ban khong dung");
  }
});
