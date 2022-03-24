import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MovieThumbnailModule } from '../movie-thumbnail/movie-thumbnail.module';
import { MovieComponent } from './movie.component';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [MovieThumbnailModule, CardModule, RouterModule, CommonModule],
  declarations: [MovieComponent]
})
export class MovieModule {}
