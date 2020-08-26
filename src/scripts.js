const userGreeting = document.querySelector('#user-name');
const userInfo = document.querySelectorAll('.user-info-text');
const user = new User(userData[10]);
const userRepository = new UserRepository(userData);

window.addEventListener('load', loadHandler);

function loadHandler() {
  greeting();
  displayInfoCard();
};

function greeting() {
  userGreeting.innerText = `Welcome ${user.getFirstName()}`;
};

function displayInfoCard() {
  userInfo[0].innerText = `${user.address}`;
  userInfo[1].innerText = `${user.email}`;
  userInfo[2].innerText = `${user.strideLength}`;
  userInfo[3].innerText = `${user.dailyStepGoal}`;
  userInfo[4].innerText = `${user.friends}`;
};

function getFriendsNames(data) {
    return user.friends.map(friend => {
      const friendMatch = userRepository.data.find(user => user.id === friend);
      return friendMatch.name;
    });
  };
