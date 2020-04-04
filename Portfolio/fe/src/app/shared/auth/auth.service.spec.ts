import { TestBed, async } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { EventEmitter, Injectable, NgZone } from '@angular/core';
import { BehaviorSubject, Subscription, Subject, Observable } from 'rxjs';
import { of } from 'rxjs/Observable/of';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { FirebaseApp, AngularFireModule } from '@angular/fire';
import { User } from 'firebase';

@Injectable()
export class MockNgZone extends NgZone {
    onStable: EventEmitter<any> = new EventEmitter(false);

    constructor() { super({ enableLongStackTrace: false }); }

    run(fn: Function): any { return fn(); }

    runOutsideAngular(fn: Function): any { return fn(); }

    simulateZoneExit(): void { this.onStable.emit(null); }
}

const fakeAuthState = new BehaviorSubject(null);
const adminCredentials = {
    email: 'admin@test.com',
    password: 'admin'
}
const adminMock = {
    uid: "admin123",
    email: adminCredentials.email
}

const fakeSignInHandler = (email: string, password: string): Promise<any> => {
    fakeAuthState.next(adminMock);
    return Promise.resolve(adminMock);
}
const fakeSignOutHandler = (): Promise<any> => {
    fakeAuthState.next(null);
    return Promise.resolve();
}

const AngularFireAuthStub = {
    authState: fakeAuthState,
    auth: {
        createUserWithEmailAndPassword: jasmine
            .createSpy('createUserWithEmailAndPassword')
            .and
            .callFake(fakeSignInHandler),
        signInWithEmailAndPassword: jasmine
            .createSpy('singInWithEmailAndPassword')
            .and
            .callFake(fakeSignInHandler),
        signOut: jasmine
            .createSpy('signOut')
            .and
            .callFake(fakeSignOutHandler)
    }
};
describe('AuthService', () => {
    const mockNgZone = jasmine.createSpyObj('mockNgZone', ['run', 'runOutsideAngular']);
    mockNgZone.run.and.callFake(fn => fn());
    let afAuth: AngularFireAuth;
    let isAuth$: Subscription;
    let isAuthRef: boolean;
    let authService: AuthService;
    let app: FirebaseApp;
    let authSpy: jasmine.Spy;
    let mockAuthState: Subject<User>;
    var config = {
        production: false,
        firebase: {
          apiKey: "AIzaSyD4J5ZMR0C0mklcF6eK4I0BtAk7mb72k3Q",
          authDomain: "alexandraciausu-a6df7.firebaseapp.com",
          databaseURL: "https://alexandraciausu-a6df7.firebaseio.com",
          projectId: "alexandraciausu-a6df7",
          storageBucket: "alexandraciausu-a6df7.appspot.com",
          messagingSenderId: "833859289093"
        }
      };
      let AngularFireMocks = {
        auth: of({ uid: 'ABC123' })
      };

    beforeEach(async(() => TestBed.configureTestingModule({
        imports: [
            AngularFireModule.initializeApp(config.firebase),
            AngularFireAuthModule
        ],
        providers: [
            AuthService,
            { provide: NgZone, useValue: mockNgZone },
            AngularFireAuth
        ],
        schemas: [NO_ERRORS_SCHEMA]
    })));

    beforeEach(() => {
        authService = TestBed.get(AuthService);
        afAuth = TestBed.get(AngularFireAuth);

   

    })

    it('should be created', () => {
        const service: AuthService = TestBed.get(AuthService);
        expect(service).toBeTruthy();
    });
});
