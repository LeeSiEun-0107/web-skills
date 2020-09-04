export const internetCollection = {
	name: "Internet 인터넷",
	areas: [
		{
			skills: [
				{
					name: "How does the internet work",
					description: {
						text: "인터넷의 작동 원리에 대해 알아보세요.",
						links: [
							["MDN - How does the Internet work?", "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/How_does_the_Internet_work"],
							["Youtube - How the Internet Works in 5 Minutes", "https://www.youtube.com/watch?v=7_LPdttKXPc"],
							["Explain That Stuff - Internet", "https://www.explainthatstuff.com/internet.html"],
							["Stanford - How Does the Internet Work?", "https://web.stanford.edu/class/msande91si/www-spr04/readings/week1/InternetWhitepaper.htm"],
							["How the Internet Works", "https://blog.hubspot.com/marketing/how-the-internet-works"],
						]
					}
				},
				{
					name: "what is http",
					description: {
						text: "HTTP 프로토콜을 통해 데이터가 배포되는 방법에 대해 알아보십시오.",
						links: [
							["MDN - HTTP", "https://developer.mozilla.org/en-US/docs/Web/HTTP"],
							["MDN - HTTP Glossary", "https://developer.mozilla.org/en-US/docs/Glossary/HTTP"],
							["MDN - An overview of HTTP", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview"],
							["Wikipedia - Hypertext Transfer Protocol", "https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol"],
						]
					}
				},
				{
					name: "Browsers and how they work",
					description: {
						text: "브라우저 및 작동 방식에 대해 알아보기",
						links: [
							["HTML5 Rocks - How Browsers Work", "https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/"],
							["Demystifying Browsers", "https://textslashplain.com/2020/02/09/demystifying-browsers/"],
							["browser and how it works", "https://poiemaweb.com/js-browser/"],
						]
					},
					skills: [
						{
							name: "Dns and how it works",
							description: {
								text: "DNS 및 작동 방식에 대해 알아보기",
								links: [
									["Wikipedia - learn about the DNS", "https://en.wikipedia.org/wiki/Domain_Name_System"],
									["DNS and how it works", "https://ijbgo.tistory.com/27"]
								]
							}
						},
						{
							name: "what is domain name",
							description: {
								text: "도메인 이름의 작동 방식에 대해 알아보기",
								links: [
									["Wikipedia - learn about the Domain name", "https://en.wikipedia.org/wiki/Domain_name"],
								]
							},
							skills: [
								{
									name: "what is hosting",
									description: {
										text: "호스팅에 대해 알아보기",
										links: [
											["Wikipedia - learn about the hosting", "https://en.wikipedia.org/wiki/HostingZ"],
										]
									}
								}
							]
						},
					]
				},
			]
		}
	]
};