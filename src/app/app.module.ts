import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { MatInputModule,
         MatCardModule,
         MatButtonModule,
        MatToolbarModule,
        MatExpansionModule,
        MatProgressSpinnerModule,
        MatPaginatorModule,
      } from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './auth/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    HeaderComponent,
    PostListComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NgModule } from '@angular/core';
// import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';

// import { AppComponent } from './app.component';
// import { PostCreateComponent } from './posts/post-create/post-create.component';
// import { MatInputModule,
//          MatCardModule,
//          MatButtonModule,
//         MatToolbarModule,
//         MatExpansionModule,
//         MatProgressSpinnerModule,
//         MatPaginatorModule,
//       } from '@angular/material';
// import { HeaderComponent } from './header/header.component';
// import { PostListComponent } from './posts/post-list/post-list.component';
// import { AppRoutingModule } from './app-routing.module';
// import { LoginComponent } from './auth/login/login.component';



// @NgModule({
//   declarations: [
//     AppComponent,
//     PostCreateComponent,
//     HeaderComponent,
//     PostListComponent,
//     LoginComponent,
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     ReactiveFormsModule,
//     BrowserAnimationsModule,
//     FormsModule,
//     MatInputModule,
//     MatCardModule,
//     MatButtonModule,
//     MatToolbarModule,
//     MatExpansionModule,
//     MatProgressSpinnerModule,
//     MatPaginatorModule,
//     HttpClientModule,
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
