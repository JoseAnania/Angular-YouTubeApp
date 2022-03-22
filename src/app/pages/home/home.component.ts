/* Componente creado para manejar la info de la página Home */
import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';
import { Video } from '../../models/youtube.models';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // creamos la propiedad de Videos (Arreglo)
  videos: Video[] = []; 

  // inyectamos el Servicio para poder llamar la info del mismo
  constructor(private YoutubeService: YoutubeService) { }

  ngOnInit(): void {

    this.cargarVideos();
  }

  // creamos un método para cargar los videos
  cargarVideos() {

        // llamamos al servicio y sus peticiones http
        this.YoutubeService.getVideos()
        .subscribe( resp => {

          // llenamos el arreglo de Videos
          this.videos.push(...resp);
        });
  }

  // creamos un método para reproducir un video
  mostrarVideo( video: Video) {

    //usamos SweetAlert2 para mostrar el video en un cuadro de diálogo
    Swal.fire({
      html: `
      <h4>${video.title}</h4>
      <hr>
      <iframe width="100%"
              height="315"
              src="https://www.youtube.com/embed/${video.resourceId.videoId}"
              frameborder="0"
              allow="accelerometer;
              autoplay;
              encrypted-media;
              gyroscope;        
              picture-in-picture"
              allowfullscreen>
      </iframe>
      
      `})
  }
}
