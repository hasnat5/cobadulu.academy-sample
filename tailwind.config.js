/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./client/*.{html,js}'],
	theme: {
		extend: {
			fontFamily: {
				Montserrat: ['Montserrat'],
				Inter: ['Inter'],
			},

			backgroundImage: {
				'main': "url('../asset/jumbotron.png')",
				'login': "url('../asset/login.jpg')",
				'signup': "url('../asset/sign up.jpg')",
				'mentor': "url('../asset/mentor.jpg')",
			},

			colors: {
				primary: '#171430',
				secondary: '#24204B',
				CTA: '#0053FB',
				CTAsec: '#3396CD',
				banger: '#F3583B',
				third: '#736EAA',
			}
		}
	},
	plugins: [],
}
