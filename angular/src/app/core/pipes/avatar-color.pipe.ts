import { Pipe, PipeTransform } from '@angular/core';
import {AVATAR_COLORS} from "../utils/constants";

@Pipe({
  name: 'avatarColor',
  standalone: true
})
export class AvatarColorPipe implements PipeTransform {


  transform(value: string | undefined): unknown {
    const index = value ? value.charCodeAt(0) % AVATAR_COLORS.length : 0;
    return AVATAR_COLORS[index];
  }

}
