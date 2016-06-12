function _(id) 
{
		//als er een element id bestaat.
	if (id) 
	{

		// kijken of de parameter is verzonden.
		if (window === this) 
		{
			return new _(id);
		}

		//variabele aanmaken om element id in te zetten.
		this.kleur = document.getElementById(id);
		return this;
	} 
	}

_.prototype = 
{
	//zoek de functie en kleur die bij de button staat.
	bgcolor: function (color) 
	{
				//kleur de div
				this.kleur.style.background = color;
				return this;
	}

};


 function buttonColor(color) 
 {
	 //ga naar de functie bgcolor om de div text te kleuren.
	 _('text').bgcolor(color);
 }
