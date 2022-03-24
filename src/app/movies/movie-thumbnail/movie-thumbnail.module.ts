import { NgModule } from '@angular/core';
import { MovieThumbnailComponent } from './movie-thumbnail.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [MovieThumbnailComponent],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [ MovieThumbnailComponent ]
})
export class MovieThumbnailModule {}
