$(document).ready(() => {
    let timeInFiveMinutes = moment().add(5, 'minutes');
    let timer = setInterval(() => {
    let timeNow = moment();
    let duration = moment.duration(timeInFiveMinutes.diff(timeNow, 'seconds'), 'seconds');
    let durationSeconds = duration.seconds() >= 10 ? `${duration.seconds()}` : `0${duration.seconds()}`;
    let durationMinutes = duration.minutes() >= 10 ? `${duration.minutes()}` : `0${duration.minutes()}`
    let durationHours = `0${duration.hours()}`;
    let durationDays = `0${duration.days()}`;  
    if (duration.asSeconds() === 0) {
        clearInterval(timer);
        $('.launching').text('REDIRECTING ...')
        window.location.href = 'http://www.sendyit.com/freight';
    };
    $('#days').text(durationDays);
    $('#hours').text(durationHours);
    $('#minutes').text(durationMinutes);
    $('#seconds').text(durationSeconds);
}, 1000);});