module.exports = function(app) {
	require("./model/models.server.js");
	require("./services/user.service.server.js")(app);
	require("./services/shoutouts.service.server.js")(app);
	require("./services/calendarpost.service.server.js")(app);
}