export class date
{
    //Propriétés
    _year: number;
    _month: number;
    _day: number;

    //Constructeur de la classe
    constructor_(Year: number, Month: number, Day: number) {
        this.year = Year;
        this.month = Month;
        this.day = Day;
    }

    //Accesseur et mutateur de YEAR
    set year(year)
    {
        this.year;
    }

    get year()
    {
        return this.year
    }

    //Accesseur et mutateur de MONTH
    set month(month)
    {
        this.month;
    }

    get month()
    {
        return this.month
    }

    //Accesseur et mutateur de DAY
    set day(day)
    {
        this.day;
    }

    get day()
    {
        return this.day
    }

    //Méthode toString
    toString() :string
    {
        return (this.year + ' ' + this.month + ' ' +this.day)
    }

    //Méthode CREATE
    create(year:number, month:number, day:number) :string
    {
        return (this.year + ' ' + this.month + ' ' +this.day)
    }

    //Méthode SETDATE
    setDate(_year: number, _month: number, _day: number) :string
    {
        this.year = _year;
        this.month = _month;
        this.day = _day;
        return(this.year + ' ' + this.month + ' ' +this.day)
    }

    //Méthode YESTERDAY
    yesterday() :string
    {
        return("")
    }
}