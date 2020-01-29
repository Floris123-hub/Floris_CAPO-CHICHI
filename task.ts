import{date} from "./date";
import{Priority} from "./priority";
export class Task
{
    _content : string;
    _date : date;
    _priority : Priority;
    _checked : boolean = false;


    set content(content)
    {
        this.content;
    }

    get content()
    {
        return this.content
    }


    set date(date)
    {
        this.date;
    }

    get date()
    {
        return this.date
    }


    set priority(priority)
    {
        this.priority;
    }

    get priority()
    {
        return this.priority
    }


    set checked(checked)
    {
        this.checked;
    }

    get checked()
    {
        return this.checked
    }


    add(content: string, date: date, priority: Priority) :string
    {
        return (this.content)
    }


    update(_content: string, _date: date, _priority: Priority)
    {
        this.content = _content;
        this.date = _date;
        this.priority = _priority;
    }


    close()
    {
        this.checked = true;
    }


    toString() : string
    {
        return(
            "CONTENU : " + this.content + "\n" +
            "DATE : " + this.date +"\n"+
            "PRIORITE : " + this.priority +"\n"+
            "ETAT : " + this.checked +"\n"
        )
    }

}