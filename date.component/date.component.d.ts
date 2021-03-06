import { OnInit, EventEmitter, ElementRef } from '@angular/core';
import { DateService, dayOfTheMonth } from '../services/date.service';
export declare class DateComponent implements OnInit {
    private dateService;
    selectedDate: Date;
    includeTime: boolean;
    min: string;
    max: string;
    selectedDateChange: EventEmitter<Date>;
    closeDatePicker: EventEmitter<boolean>;
    yearSelect: ElementRef;
    monthSelect: ElementRef;
    availableDays: dayOfTheMonth[];
    months: string[];
    years: number[];
    highlightedDate: Date;
    selectedHour: number;
    selectedMinute: number;
    showMonthSelection: boolean;
    showYearSelection: boolean;
    selectedMonth: number;
    selectedDay: number;
    selectedYear: number;
    readonly selectedMonthText: string;
    constructor(dateService: DateService);
    setSelectedDate(date: Date, hour?: number, minutes?: number): void;
    private loadCalendarMonth(date);
    ngOnInit(): void;
    canSelectYear(year: number): boolean;
    canSelectMonth(month: number): boolean;
    canSelectDay(day: number, month: number): boolean;
    scrollToYear(): void;
    scrollToMonth(): void;
    previousMonth(): void;
    nextMonth(): void;
    toggleMonthMenu(): void;
    toggleYearMenu(): void;
    closePicker(): void;
}
