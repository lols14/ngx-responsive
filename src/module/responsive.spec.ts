import {Breakpoints}       from "./breakpoints";
import {ResponsiveService} from "./responsive";


describe("Responsive service", function () {
  let service: ResponsiveService;

  beforeEach(function () {
    service = new ResponsiveService();
  });

  it("should call correct callbacks", function () {
    let phoneCalled = false;
    let tabletPortraitCalled = false;
    let tabletLandscapeCalled = false;
    let desktopCalled = false;

    service.subscribe(Breakpoints.forPhoneUp, () => {
      phoneCalled = true;
    });

    service.subscribe(Breakpoints.forTabletPortraitUp, () => {
      tabletPortraitCalled = true;
    });

    service.subscribe(Breakpoints.forTabletLandscapeUp, () => {
      tabletLandscapeCalled = true;
    });

    service.subscribe(Breakpoints.forDesktopUp, () => {
      desktopCalled = true;
    });

    (service as any).width  = 400;
    (service as any).callCallbacks();
    expect(phoneCalled).toBeTruthy();
    expect(tabletPortraitCalled).toBeFalsy();
    expect(tabletLandscapeCalled).toBeFalsy();
    expect(desktopCalled).toBeFalsy();

    phoneCalled = false;
    tabletPortraitCalled = false;
    tabletLandscapeCalled = false;
    desktopCalled = false;

    (service as any).width  = 768;
    (service as any).callCallbacks();
    expect(phoneCalled).toBeTruthy();
    expect(tabletPortraitCalled).toBeTruthy();
    expect(tabletLandscapeCalled).toBeFalsy();
    expect(desktopCalled).toBeFalsy();
  });

  it("should subscribe properly", () => {
    let cb1Called = false;
    let cb2Called = false;
    const cb1 = () => {
      cb1Called = true;
    };
    const cb2 = () => {
      cb2Called = true;
    };

    service.subscribe(Breakpoints.forPhoneUp, cb1);
    service.subscribe(Breakpoints.forPhoneUp, cb2);

    (service as any).width  = 400;
    (service as any).callCallbacks();

    expect(cb1Called).toBeTruthy();
    expect(cb2Called).toBeTruthy();

    cb1Called = false;
    cb2Called = false;

    service.unsubscribe(Breakpoints.forPhoneUp, cb1);
    service.unsubscribe(Breakpoints.forPhoneUp, cb2);

    (service as any).width  = 400;
    (service as any).callCallbacks();
    expect(cb1Called).toBeFalsy();
    expect(cb2Called).toBeFalsy();

  });

});
