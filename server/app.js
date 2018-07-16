module.exports = function(app) {
	require("./services/user.service.server")(app);
	require("./services/shoutouts.service.server")(app);
	require("./services/calendarpost.service.server")(app);
}