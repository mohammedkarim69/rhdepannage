import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { GoogleReviews, Review } from 'src/app/shared/interfaces/google';

enum StarRating {
  STAR_RATING_UNSPECIFIED = 'Non spécifié',
  ONE = 'Une étoile sur cinq',
  TWO = 'Deux étoiles sur cinq',
  THREE = 'Trois étoiles sur cinq',
  FOUR = 'Quatre étoiles sur cinq',
  FIVE = 'Cinq étoiles sur cinq'
}

@Component({
  selector: 'app-googleredirection',
  templateUrl: './googleredirection.component.html',
  styleUrls: ['./googleredirection.component.scss']
})
export class GoogleredirectionComponent implements OnInit {

  private http = inject(HttpClient);

  googleAvisList: GoogleReviews | null = null;

  reviewsTest: Review[] = [
    {
      "name": "Momo la star",
      "reviewId": "Momo la star",
      "reviewer": {
        "profilePhotoUrl": "string",
        "displayName": "displayName",
        "isAnonymous": false
      },
      "starRating": StarRating.FOUR,
      "comment": `Victime d'une panne imprévisible de ma pompe à essence au pont de Serrières, j'ai contacté RHDépannage.
En 30mn, mon véhicule a été chargé puis remorqué jusqu'à Annonay pour réparation.

J'ai vraiment apprécié votre accueil téléphonique, votre réactivité, votre professionnalisme pour le chargement ainsi que nos échanges passionnés pendant le trajet.

Même si je ne souhaites plus être en panne, je referais très volontiers appel à vous si cela devait se reproduire.
Merci encore pour cette intervention.
Visité en juin 2023`,
      "createTime": "01/01/2020",
      "updateTime": "01/01/2020",
      "reviewReply": {
        "comment": "",
        "updateTime": ""
      }
    },
    {
      "name": "Gus la star",
      "reviewId": "Gus la star",
      "reviewer": {
        "profilePhotoUrl": "string",
        "displayName": "displayName",
        "isAnonymous": false
      },
      "starRating": StarRating.THREE,
      "comment": `Remorquages d'un trike de Vienne (38) à Yssingeaux (43).
Rien à redire niveau qualité prix sur le service.
Personnel agréable.
Le seul hic c'est un léger retard car on nous avait légèrement oublié ou confondues avec un autre rdv. Mais bon tout c'est bien passé au final.
Si besoin je referai appel à eux.`,
      "createTime": "05/01/2020",
      "updateTime": "05/01/2020",
      "reviewReply": {
        "comment": "",
        "updateTime": ""
      }
    },
    {
      "name": "Gus la star",
      "reviewId": "Gus la star",
      "reviewer": {
        "profilePhotoUrl": "string",
        "displayName": "displayName",
        "isAnonymous": false
      },
      "starRating": StarRating.FIVE,
      "comment": `Transport d'un véhicule de collection non roulant de Orange à Annonay, professionnel au top bonne connaissance en mécanique , répond au téléphone et sms immédiatement . Ne cherchez pas ailleurs, vous ne serez pas déçus, personne très agréable et fait tout pour vous servir, respecte les dates et heures du rendez-vous. Pour moi je garde en mémoire ces coordonnés, merci pour l'intervention.`,
      "createTime": "05/01/2020",
      "updateTime": "05/01/2020",
      "reviewReply": {
        "comment": "",
        "updateTime": ""
      }
    },
  ]

  googleAvisList2: GoogleReviews = {
    "reviews": this.reviewsTest,
    "averageRating": 5,
    "totalReviewCount": 57,
    "nextPageToken": ""
  }

  ngOnInit(): void {
      this.getGoogleReviews().subscribe({
        next: (data) => this.googleAvisList = data,
        error: (err) => console.log(err.error.message)
      })
  }

  getNumberStarSolid(stars: StarRating): number[] {
    switch (stars) {
      case 'Une étoile sur cinq': 
        return [1];
      case 'Deux étoiles sur cinq': 
        return [1,2];
      case 'Trois étoiles sur cinq': 
        return [1,2,3];
      case 'Quatre étoiles sur cinq': 
        return [1,2,3,4];
      case 'Cinq étoiles sur cinq': 
        return [1,2,3,4,5];
      default:
        return [];
    }
  }

  getNumberStarRegular(stars: StarRating): number[] {
    switch (stars) {
      case 'Cinq étoiles sur cinq': 
        return [];
      case 'Quatre étoiles sur cinq': 
        return [1];
      case 'Trois étoiles sur cinq': 
        return [1,2];
      case 'Deux étoiles sur cinq': 
        return [1,2,3];
      case 'Une étoile sur cinq': 
        return [1,2,3,4];
      default:
        return [1,2,3,4,5];
    }
  }

  //------------------------------------
  //-----Google-Reviews-API-Request-----
  //------------------------------------

  private googleAccountId : string = "";
  private googleLocationId : string = "ChIJW6E5Ms4X9UcRJqZyrxp74hc";

  // getGoogleReviews(): Observable<any> {
  protected getGoogleReviews(): Observable<GoogleReviews> {
    return this.http.get<GoogleReviews>(`https://mybusiness.googleapis.com/v4/accounts/${this.googleAccountId}/locations/${this.googleLocationId}/reviews`)
  }

  protected getOneReview(reviewId : number): Observable<Review> {
    return this.http.get<Review>(`https://mybusiness.googleapis.com/v4/accounts/${this.googleAccountId}/locations/${this.googleLocationId}/reviews/` + reviewId)
  }
}
