import { Pipe, PipeTransform } from '@angular/core';
import {AVATAR_COLORS, EVENT_TYPE_ICON_MAP} from "../utils/constants";
import {EventType} from '../models/customer.model';

@Pipe({
  name: 'eventIcon',
  standalone: true
})
export class EventIconPipe implements PipeTransform {

  transform(value: EventType): unknown {
    return EVENT_TYPE_ICON_MAP[value];
  }

}
