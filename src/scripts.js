
const userGreeting = document.querySelector('#user-name');
const userInfo = document.querySelectorAll('.user-info-text');
const hydrationInfo = document.querySelectorAll('.hydration-info');

const user = new User(userData[10]);
const userRepository = new UserRepository(userData);
const hydrationRepository = new HydrationRepository(hydrationData);

window.addEventListener('load', loadHandler);

function loadHandler() {
  greeting();
  displayInfoCard();
  displayTodaysOunces();
};

function greeting() {
  userGreeting.innerText = `Welcome ${user.getFirstName()}`;
};

function displayInfoCard() {
  userInfo[0].innerText = `${user.address}`;
  userInfo[1].innerText = `${user.email}`;
  userInfo[2].innerText = `Stride Length: ${user.strideLength}`;
  userInfo[3].innerText = `Daily Step Goal: ${user.dailyStepGoal}`;
  userInfo[4].innerText = `Average Step Goal: ${userRepository.calculateAverageStepGoal()}`;
  userInfo[5].innerText = `Friends: ${getFriendsNames()}`;
};

function getFriendsNames(data) {
    return user.friends.map(friend => {
      const friendMatch = userRepository.data.find(user => user.id === friend);
      return friendMatch.name;
    });
};

function displayTodaysOunces() {
  hydrationInfo[0].innerText = `Today's Ounces: ${hydrationRepository.specificDayOunces(1, '2019/06/19')}`;
};
