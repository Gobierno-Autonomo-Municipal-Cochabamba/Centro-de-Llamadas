import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) },
  { path: 'menu', loadChildren: () => import('./features/menu/menu.module').then(m => m.MenuModule) },
  { path: 'casos', loadChildren: () => import('./features/casos/casos.module').then(m => m.CasosModule) },
  { path: 'consulta-atlas', loadChildren: () => import('./features/consulta-atlas/consulta-atlas.module').then(m => m.ConsultaAtlasModule) },
  { path: 'preguntas-frecuentes', loadChildren: () => import('./features/preguntas-frecuentes/preguntas-frecuentes.module').then(m => m.PreguntasFrecuentesModule) },
  { path: 'whatsapp', loadChildren: () => import('./features/whatsapp/whatsapp.module').then(m => m.WhatsappModule) },
  { path: 'denuncias', loadChildren: () => import('./features/denuncias/denuncias.module').then(m => m.DenunciasModule) },
  { path: 'bandeja-ciudadana', loadChildren: () => import('./features/bandeja-ciudadana/bandeja-ciudadana.module').then(m => m.BandejaCiudadanaModule) },
  { path: 'perfil', loadChildren: () => import('./features/perfil/perfil.module').then(m => m.PerfilModule) },
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
