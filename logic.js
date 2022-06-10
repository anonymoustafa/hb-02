const headerData = {
	oo: [
		{
			phone: +00258,
			email: "anonymoustafa@outlook.com",
		},
		{
			phone: +001451541,
			email: "anonymoustafa@outlook.com",
		},
		{
			phone: +001145451,
			email: "anonymoustafa@outlook.com",
		},
		{
			phone: +8713211241,
			email: "anonymoustafa@outlook.com",
		}
	]
};

$(document).ready(function () {
    const headerTemplate = $("#header-template").html();
    const headerContainer = Handlebars.compile(headerTemplate)

//console.log(headerContainer());
     $("#hoh").html(headerContainer(headerData));
});