"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Task = /** @class */ (function () {
    function Task() {
        this._checked = false;
    }
    Object.defineProperty(Task.prototype, "content", {
        get: function () {
            return this.content;
        },
        set: function (content) {
            this.content;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "date", {
        get: function () {
            return this.date;
        },
        set: function (date) {
            this.date;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "priority", {
        get: function () {
            return this.priority;
        },
        set: function (priority) {
            this.priority;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "checked", {
        get: function () {
            return this.checked;
        },
        set: function (checked) {
            this.checked;
        },
        enumerable: true,
        configurable: true
    });
    Task.prototype.add = function (content, date, priority) {
        return (this.content);
    };
    Task.prototype.update = function (_content, _date, _priority) {
        this.content = _content;
        this.date = _date;
        this.priority = _priority;
    };
    Task.prototype.close = function () {
        this.checked = true;
    };
    Task.prototype.toString = function () {
        return ("CONTENU : " + this.content + "\n" +
            "DATE : " + this.date + "\n" +
            "PRIORITE : " + this.priority + "\n" +
            "ETAT : " + this.checked + "\n");
    };
    return Task;
}());
exports.Task = Task;
