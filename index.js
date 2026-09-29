/*let username;

document.getElementById('mysubmit').onclick = function () {
  username = document.getElementById('mytext').value;
  document.getElementById(
    'myh1').textContent = `Hello ${username}, do you want to be friends?`;
};
let username;
*/
let username;

document.getElementById('mysubmit').onclick = function () {
  username = document.getElementById('mytext').value;

    document.getElementById('myh1').textContent = `Hello ${username}, do you want to be friends?`;
    document.getElementById('mytext').style.display = 'none';
    document.getElementById('mysubmit').style.display = 'none';
    document.getElementById('label').style.display = 'none';
    document.getElementById('')
    document.getElementById('questionBox').style.display = 'none';   // hides
document.getElementById('questionBox').style.display = 'block';  // shows
document.getElementById('acceptBtn').onclick = function () {
  document.getElementById('myh1').textContent = 'YAY';
  document.getElementById('questionBox').style.display = 'none';
 
};

document.getElementById('declineBtn').onclick = function () {
  document.getElementById('declineBtn').style.display = 'none';
  document.getElementById('acceptBtn').style.display = 'none';
  document.getElementById('paregraph').style.display = 'none';
  document.getElementById('pare').style.display = 'block'
  document.getElementById('myh1').textContent = 'WHY NOT';
  document.getElementById('atag').style.display = 'block';

};


  } else {
    document.getElementById('myh1').textContent = 'WRONG USERNAME';
    document.getElementById('mytext').style.display = 'none';
    document.getElementById('mysubmit').style.display = 'none';
    document.getElementById('label').style.display = 'none';
  }
};
