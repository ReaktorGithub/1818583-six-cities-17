import {AddCommentForm} from '../add-comment-form/add-comment-form.tsx';
import {Review} from '../review/review.tsx';
import {ReviewType} from '../../api/types.ts';

type Props = {
  list: ReviewType[];
}

function ReviewsList({ list }: Props) {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{list.length}</span></h2>
      <ul className="reviews__list">
        {
          list.map((review) => <Review key={review.id} data={review}/>)
        }
      </ul>
      <AddCommentForm />
    </section>
  );
}

export {ReviewsList};
