import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'appAgo'})
export class AgoPipe implements PipeTransform {
    transform(value: any): any {
        if (value) {
            const seconds = Math.floor((+new Date - +new Date(value)) / 1000);
            if (seconds < 30) {
                return 'A few seconds ago';
            }

            const intervals = {
                years: 3600 * 24 * 365,
                months: 3600 * 24 * 30,
                weeks: 3600 * 24 * 7,
                days: 3600 * 24,
                hours: 3600,
                minutes: 60,
                secondes: 1
            };

            let counter = 0;
            for (const unitName in intervals) {
                if (intervals.hasOwnProperty(unitName)) {
                    const unitValue = intervals[unitName];  
                    counter = Math.floor(seconds / unitValue);
                    if (counter > 0) {
                        return `${counter} ${unitName} ago`;
                    }           
                }
            }
        }

        return value;
    }
}