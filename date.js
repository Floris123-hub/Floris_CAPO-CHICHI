"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var date = /** @class */ (function () {
    function date() {
    }
    //Constructeur de la classe
    date.prototype.constructor_ = function (Year, Month, Day) {
        this.year = Year;
        this.month = Month;
        this.day = Day;
    };
    Object.defineProperty(date.prototype, "year", {
        get: function () {
            return this.year;
        },
        //Accesseur et mutateur de YEAR
        set: function (year) {
            this.year;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(date.prototype, "month", {
        get: function () {
            return this.month;
        },
        //Accesseur et mutateur de MONTH
        set: function (month) {
            this.month;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(date.prototype, "day", {
        get: function () {
            return this.day;
        },
        //Accesseur et mutateur de DAY
        set: function (day) {
            this.day;
        },
        enumerable: true,
        configurable: true
    });
    //Méthode toString
    date.prototype.toString = function () {
        return (this.year + ' ' + this.month + ' ' + this.day);
    };
    //Méthode CREATE
    date.prototype.create = function (year, month, day) {
        return (this.year + ' ' + this.month + ' ' + this.day);
    };
    //Méthode SETDATE
    date.prototype.setDate = function (_year, _month, _day) {
        this.year = _year;
        this.month = _month;
        this.day = _day;
        return (this.year + ' ' + this.month + ' ' + this.day);
    };
    //Méthode YESTERDAY
    date.prototype.yesterday = function () {
        return ("");
    };
    return date;
}());
exports.date = date;
