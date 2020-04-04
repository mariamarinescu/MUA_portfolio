import { Pipe, PipeTransform } from '@angular/core';



export interface IImageFilterPipe {
    transform(items: any[], criteria: string): any;
}

@Pipe({name: 'imageFilter'})

export class ImageFilterPipe implements PipeTransform, IImageFilterPipe {
    transform(items: any[], criteria: string): any {
        return items.filter(item => {
            return item.category === criteria;
        })
    };
}

@Pipe({name: 'imageIdFilter'})

export class ImageIdFilterPipe implements PipeTransform, IImageFilterPipe {
    transform(items: any[], criteria: string): any {
        return items.filter(item => {
            return item.id === criteria;
        })
    };
}