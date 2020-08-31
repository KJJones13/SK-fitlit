const userGreeting = document.querySelector('#user-name');
const userInfo = document.querySelectorAll('.user-info-text');
const hydrationInfo = document.querySelectorAll('.hydration-info');
const sleepInfo = document.querySelectorAll('.sleep-info');
const activityInfo = document.querySelectorAll('.activity-info');

const user = new User(userData[10]);
const userRepository = new UserRepository(userData);
const hydrationRepository = new HydrationRepository(hydrationData);
const hydration = new Hydration(hydrationData);
const sleepRepository = new SleepRepository(sleepData);
const activityRepository = new ActivityRepository(activityData);

window.addEventListener('load', loadHandler);

function loadHandler() {
  greeting();
  displayInfoCard();
  displayHydrationInfo();
  displaySleepInfo();
  displayActivityInfo();
  displayStepsForDay();
  displayStairsClimbedForDay();
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

function displayHydrationInfo() {
  hydrationInfo[0].innerText = `Today's Ounces: ${hydrationRepository.specificDayOunces(user.id, '2019/06/19')}`;
  hydrationInfo[1].innerText = `Weekly Ounces: ${hydrationRepository.weeklyOunces(user.id, '2019/06/19')}`;
};

function displaySleepInfo() {
  sleepInfo[1].innerText = `Today's Sleep Info: ${sleepRepository.getSleepHoursDay(user.id, '2019/06/19')} Hours - ${sleepRepository.getSleepQualityDay(user.id, '2019/06/19')} Sleep Quality`;
  sleepInfo[2].innerText = `Weekly Sleep Info: ${sleepRepository.getWeeklySleepHours(user.id, '2019/06/19')} Hours - ${sleepRepository.getWeeklySleepQuality(user.id, '2019/06/19')} Sleep Quality`;
  sleepInfo[3].innerText = `Average Sleep Info: ${sleepRepository.getAverageSleepHours(user.id)} Hours - ${sleepRepository.getAverageSleepQuality(user.id)} Sleep Quality`;
};

function displayActivityInfo() {
  activityInfo[0].innerText = `Today's Steps: ${displayStepsForDay(user.id, '2019/06/19')}`;
  activityInfo[1].innerText = `Today's Minutes Active: ${activityRepository.getMinutesActive(user.id, '2019/06/19')}`;
  activityInfo[2].innerText = `Today's Miles Walked: ${activityRepository.calculateMilesWalked(user.id, '2019/06/19', user)}`;
  activityInfo[3].innerText = `Your Step Info: ${displayStepsForDay(user.id, '2019/06/19')} - Average Step Info: ${activityRepository.getAllUsersAverageSteps('2019/06/19')}`;
  activityInfo[4].innerText = `Your Minutes Active: ${activityRepository.getMinutesActive(user.id, '2019/06/19')} - Average Minutes Active: ${activityRepository.getAllUsersAverageMinActive('2019/06/19')}`;
  activityInfo[5].innerText = `Your Stairs Climbed: ${displayStairsClimbedForDay(user.id, '2019/06/19')} - Average Stairs Climbed: ${activityRepository.getAllUserAverageStairs('2019/06/19')}`;
  activityInfo[6].innerText = `Your Weekly Averages: ${activityRepository.getMinutesActiveAverageWeek(user.id, '2019/06/19')} - ${activityRepository.getFlightsOfStairsAverageWeek(user.id, '2019/06/19')} - ${activityRepository.getStepCountAverageWeek(user.id, '2019/06/19')}`;
};

function displayStepsForDay(userID, date) {
  let userEntry = activityData.find(entry => entry.userID === userID && entry.date === date);
  return userEntry.numSteps;
};

function displayStairsClimbedForDay(userID, date) {
  let userEntry = activityData.find(entry => entry.userID === userID && entry.date === date);
  return userEntry.flightsOfStairs;
};
