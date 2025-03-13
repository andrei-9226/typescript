interface PlayerState {
  play(player: MusicPlayer): void;
  pause(player: MusicPlayer): void;
}

class PlayingState implements PlayerState {
  play(): void {
    console.log("Music is already playing.");
  }
  pause(player: MusicPlayer): void {
    console.log("Pausing music.");
    player.setState(new PausedState());
  }
}

class PausedState implements PlayerState {
  play(player: MusicPlayer): void {
    console.log("Resuming music.");
    player.setState(new PlayingState());
  }

  pause(): void {
    console.log("Music is already paused.");
  }
}

class MusicPlayer {
  private state: PlayerState;

  constructor() {
    this.state = new PausedState(); // Изначально плеер остановлен
  }

  public setState(state: PlayerState): void {
    this.state = state;
  }

  public play(): void {
    this.state.play(this);
  }

  public pause(): void {
    this.state.pause(this);
  }
}

const player = new MusicPlayer();

player.play();
player.pause();
player.pause();
player.play();
