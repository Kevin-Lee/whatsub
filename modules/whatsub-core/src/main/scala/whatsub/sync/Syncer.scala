package whatsub.sync

import whatsub.Playtime

/** @author Kevin Lee
  * @since 2021-07-09
  */
trait Syncer[F[*], A] {
  extension (a: A) {
    def sync(sync: Syncer.Sync): F[A]
  }
}

object Syncer {

  def apply[F[*], A](using Syncer[F, A]): Syncer[F, A] = summon[Syncer[F, A]]

  final case class Sync(direction: Direction, playtime: Playtime) derives CanEqual
  enum Direction derives CanEqual {
    case Forward
    case Backward
  }

}
