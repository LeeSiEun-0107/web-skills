export const htmlCollection = {
	name: "Html",
	areas: [
		{
			skills: [
				{
					name: "Learn the basics",
					description: {
						text: "HTML의 기본을 배우고 HTML의 구문 및 주요 개념에 익숙해지십시오.",
						links: [
							["MDN - HTML Basics", "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics"],
							["MDN - Introduction to HTML", "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML"],
							["Codecademy - Learn HTML", "https://www.codecademy.com/learn/learn-html"],
						]
					},
				},
				{
					name: "Writing Semantic HTML",
					description: {
						text: "기본 HTML 태그를 숙지하십시오.",
								links: [
									["MDN - HTML elements reference", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element"],
									["Tutorialspoint - Basic HTML tags", "https://www.tutorialspoint.com/html/html_basic_tags.htm"],
									["Elated - First 10 HTML tags", "https://www.elated.com/first-10-html-tags/"],
									["W3Schools - HTML tags", "https://www.w3schools.com/tags/ref_byfunc.asp"]
								]
					},
				},
				{
					name: "forms and validations",
					description: {
						text: "효율적인 양식을 설계하고, 효과적으로 검증하며, 사용자에게 계속 정보를 제공하는 방법에 대해 알아보십시오.",
						links: [
							["MDN - HTML forms", "https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms"],
							["Google Web - Forms", "https://developers.google.com/web/fundamentals/design-and-ux/input/forms/"],
							["W3Schools - Forms", "https://www.w3schools.com/html/html_forms.asp"],
						]
					},
					skills: [
						{
							name: "Conventions and Best Practices",
							description: {
								text: "HTML 작성의 모범 사례에 대해 알아보십시오.",
								links: [
									["MDN - HTML guidelines", "https://developer.mozilla.org/en-US/docs/MDN/Contribute/Guidelines/Code_guidelines/HTML"],
									["W3Schools - HTML Coding Conventions", "https://www.w3schools.com/html/html5_syntax.asp"]
								]
							},
						},
						{
							name: "Accessible",
							description: {
								text: "보조 기술이 HTML을 더 잘 이해할 수 있도록 HTML을 작성하는 방법에 대해 알아보십시오.",
								links: [
									["Google Devs - Introduction to Semantics", "https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/"],
									["MDN - Accessibility HTML", "https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML"],
									["Webaim - Skip navigation", "https://webaim.org/techniques/skipnav/"],
									["w3c - Headings", "https://www.w3.org/WAI/tutorials/page-structure/headings/"],
									["Freecodecamp - Semantic Elements", "https://guide.freecodecamp.org/html/html5-semantic-elements/"]
								]
							},
						},
						{
							name: "SEO Basics",
							description: {
								text: "컨텐츠를 검색하기 쉽게 만드는 방법에 대해 알아보십시오.",
								links: [
									["web.dev - Discoverable", "https://web.dev/discoverable"],
									["Google Search - Get Started", "https://developers.google.com/search/docs/guides/get-started"],
									["Google Search - SEO basics", "https://developers.google.com/search/docs/guides/javascript-seo-basics"],
									["web.dev - SEO audits", "https://web.dev/lighthouse-seo"]
							]
							},
						},
					]
				},
			]
		},
	]
}